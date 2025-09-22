'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import { PagePadding, Container } from '@/components/layout'
import { useAuth } from '@/lib/firebase/auth'
import { Button } from '@/components/ui'

export function Header() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative">
      {/* Main Navbar */}
      <div className="relative z-[1000]">
        <PagePadding>
          <Container>
            <nav className="relative z-2 flex items-center justify-between pt-6 md:pt-12 pb-6">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="inline-block">
                  <Image
                    src="/images/The Elevated gentleman.svg"
                    alt="The Elevated Gentleman"
                    width={330}
                    height={19}
                    className="h-4 md:h-5 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-end">
                <div className="flex items-center gap-6 pl-6">
                  {/* Menu Links - Only show when user is authenticated */}
                  {user && (
                    <>
                      <div className="z-1 flex items-center justify-center gap-6">
                        {NAVIGATION_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group relative h-7 overflow-hidden text-decoration-none transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                          >
                            <div className="font-serif text-xl block">
                              {link.name}
                            </div>
                            <div className="font-serif text-xl block">
                              {link.name}
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Menu Border */}
                      <div className="w-[15px] h-px bg-black" />
                    </>
                  )}

                  {/* Social Links */}
                  <div className="z-1 flex items-center justify-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <div key={social.name} className="w-5 h-5">
                        <Link
                          href={social.href}
                          target="_blank"
                          className="inline-block transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-600 cursor-pointer"
                        >
                          <div className="w-5 h-5 flex">
                            {social.icon === 'Instagram' && (
                              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
                              </svg>
                            )}
                            {social.icon === 'Twitter' && (
                              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                              </svg>
                            )}
                            {social.icon === 'Youtube' && (
                              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
                              </svg>
                            )}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* User Menu */}
                  {user && (
                    <div className="ml-6 flex items-center gap-4">
                      <span className="text-sm font-serif text-gray-600">
                        {user.displayName || user.email}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="text-sm"
                      >
                        Logout
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center gap-4">
                {/* Social Links for Mobile */}
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="w-4 h-4 transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-600 cursor-pointer"
                    >
                      {social.icon === 'Instagram' && (
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
                        </svg>
                      )}
                      {social.icon === 'Twitter' && (
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </svg>
                      )}
                      {social.icon === 'Youtube' && (
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Hamburger Menu */}
                {user && (
                  <button
                    onClick={toggleMobileMenu}
                    className="w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300 ease-in-out cursor-pointer"
                    aria-label="Toggle mobile menu"
                  >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </button>
                )}
              </div>
            </nav>

            {/* Divider Line */}
            <div className="divider" />
          </Container>
        </PagePadding>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && user && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-[999] shadow-lg">
          <PagePadding>
            <Container>
              <nav className="py-6 space-y-4">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-3 font-serif text-xl transition-all duration-300 ease-in-out hover:text-gray-600 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* User Info & Logout */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    <span className="text-sm font-serif text-gray-600 block mb-2">
                      {user.displayName || user.email}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLogout}
                      className="text-sm"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </nav>
            </Container>
          </PagePadding>
        </div>
      )}

      <div className="navbar-sticky-placeholder" />
      <div className="mobile-menu-overlay" />
    </header>
  )
}