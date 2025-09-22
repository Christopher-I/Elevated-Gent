'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="footer text-white bg-black mt-24 md:mt-48">
      {/* Newsletter Section */}
      <section className="section-newsletter">
        <div className="px-4 md:px-10">
          <div className="mx-auto max-w-[95rem]">
            <div className="py-16 md:py-32">
              <div className="newsletter-grid grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-8">
                <div className="overflow-hidden text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-semibold uppercase font-sans leading-tight">
                    The Elevated Gentleman
                  </h2>
                </div>
                <div className="newsletter-right flex items-center justify-center md:justify-end">
                  <div className="w-full max-w-sm">
                    <form className="subscribe-form-flex grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 flex-1 items-end justify-center">
                      <div className="subscribe-form-input-wrapper text-left">
                        <Input
                          className="subscribe-form-input border-0 border-black mb-0 py-7 px-4 w-full"
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="inverse"
                        size="sm"
                        className="btn-inverse btn-small w-full md:w-auto"
                      >
                        Sign Up
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="section-footer grid grid-cols-3 gap-8" />
    </footer>
  )
}