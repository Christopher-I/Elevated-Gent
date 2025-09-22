'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="footer text-white bg-black mt-48">
      {/* Newsletter Section */}
      <section className="section-newsletter">
        <div className="px-10">
          <div className="mx-auto max-w-[95rem]">
            <div className="py-32">
              <div className="newsletter-grid grid grid-cols-[1.25fr_1fr] gap-8">
                <div className="overflow-hidden">
                  <h2 className="text-6xl font-semibold uppercase font-sans leading-tight">
                    The Elevated Gentleman
                  </h2>
                </div>
                <div className="newsletter-right flex items-center justify-end">
                  <div className="max-w-sm">
                    <form className="subscribe-form-flex grid grid-cols-[1fr_auto] gap-4 flex-1 items-end justify-center">
                      <div className="subscribe-form-input-wrapper text-left">
                        <Input
                          className="subscribe-form-input border-0 border-black mb-0 py-7 px-4"
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="inverse"
                        size="sm"
                        className="btn-inverse btn-small"
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