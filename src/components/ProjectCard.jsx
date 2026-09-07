import { useEffect, useState } from 'react'

const getImageSrc = (image) => (typeof image === 'string' ? image : image.src)
const getImageCaption = (image) => (typeof image === 'string' ? null : image.caption)
const getImageAnnotations = (image) =>
  typeof image === 'string' ? [] : image.annotations ?? []

function AnnotationBubble({ x, y, side = 'top', text }) {
  const isTop = side === 'top'
  const bubble = (
    <div className="max-w-[180px] rounded-2xl bg-white px-3 py-2 text-xs font-medium leading-snug text-ink shadow-xl sm:max-w-[240px] sm:text-sm">
      {text}
    </div>
  )
  const tail = <div className="h-2.5 w-2.5 rotate-45 bg-white" />

  return (
    <div
      className="pointer-events-none absolute z-10 flex flex-col items-center"
      style={{ left: x, top: y, transform: isTop ? 'translate(-50%, -100%)' : 'translate(-50%, 0%)' }}
    >
      {isTop && bubble}
      <div className={isTop ? '-mt-[5px]' : '-mb-[5px] order-first'}>{tail}</div>
      {!isTop && bubble}
    </div>
  )
}

function MediaPreview({ project }) {
  if (project.videoId) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${project.videoId}`}
        title={`${project.title} demo`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  if (project.video) {
    return (
      <video
        className="h-full w-full"
        controls
        preload="metadata"
        poster={project.videoPoster}
      >
        <source src={project.video} type="video/mp4" />
      </video>
    )
  }

  if (project.images?.length) {
    return (
      <img
        src={getImageSrc(project.images[0])}
        alt={`${project.title} screenshot`}
        className="h-full w-full object-contain"
      />
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center text-sm text-white/40">
      Demo coming soon
    </div>
  )
}

export default function ProjectCard({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const images = project.images ?? []

  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const showNext = () => setLightboxIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, images.length])

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {images.length ? (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="aspect-video w-full cursor-zoom-in bg-black/40"
        >
          <MediaPreview project={project} />
        </button>
      ) : (
        <div className="aspect-video w-full bg-black/40">
          <MediaPreview project={project} />
        </div>
      )}

      {images.length > 1 && (
        <div className="scrollbar-thin flex gap-2 overflow-x-auto p-3">
          {images.map((image, i) => (
            <button
              key={getImageSrc(image)}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="h-14 w-24 flex-shrink-0 overflow-hidden rounded-md border border-white/10"
            >
              <img
                src={getImageSrc(image)}
                alt={`${project.title} screenshot ${i + 1}`}
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
        {(project.links?.repo || project.links?.live) && (
          <div className="mt-4 flex gap-4 text-sm">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Live
              </a>
            )}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 text-3xl leading-none text-white/70 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous screenshot"
            >
              &#8249;
            </button>
          )}

          <div
            className="flex max-h-full max-w-full flex-col items-stretch"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getImageSrc(images[lightboxIndex])}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                className={`max-h-[80vh] max-w-full object-contain ${
                  getImageCaption(images[lightboxIndex]) ? 'rounded-t-lg' : 'rounded-lg'
                }`}
              />
              {getImageAnnotations(images[lightboxIndex]).map((note, i) => (
                <AnnotationBubble key={i} {...note} />
              ))}
            </div>
            {getImageCaption(images[lightboxIndex]) && (
              <div className="rounded-b-lg bg-gray-200/95 px-4 py-2 text-sm text-gray-800 shadow-lg">
                {getImageCaption(images[lightboxIndex])}
              </div>
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white hover:bg-white/20 sm:right-6"
              aria-label="Next screenshot"
            >
              &#8250;
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
