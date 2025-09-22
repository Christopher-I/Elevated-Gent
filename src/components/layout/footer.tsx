'use client'

export function Footer() {
  return (
    <footer className="footer text-white bg-black mt-24 md:mt-48">
      {/* Newsletter Section */}
      <section className="section-newsletter">
        <div className="px-4 md:px-10">
          <div className="mx-auto max-w-[95rem]">
            <div className="py-16 md:py-32">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-semibold uppercase font-sans leading-tight">
                  The Elevated Gentleman
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="section-footer py-8 border-t border-gray-800">
        <div className="px-4 md:px-10">
          <div className="mx-auto max-w-[95rem]">
            <div className="text-center">
              <a
                href="/privacy"
                className="text-sm font-serif text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}