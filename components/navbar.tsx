"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Home, ShoppingBag, FileText, Info, Menu, X, ExternalLink } from "lucide-react"
import Image from "next/image"

// Simple classNames utility function to replace cn if lib/utils.ts is missing
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
  external?: boolean
}

export function Navbar() {
  const [activeTab, setActiveTab] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Shop', url: '/shop', icon: ShoppingBag },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'About', url: '/about', icon: Info },
    { name: 'TeePublic Store', url: 'https://www.teepublic.com', icon: ExternalLink, external: true }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
            <div className="absolute inset-1 bg-primary rounded-full opacity-40"></div>
            <div className="absolute inset-2 bg-primary rounded-full opacity-90"></div>
          </div>
          <span className={classNames(
            "text-xl font-cormorant font-bold tracking-tight transition-colors",
            scrolled ? "text-gray-900" : "text-gray-900"
          )}>
            FlowersLuxe
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <div className={classNames(
            "flex items-center gap-1 rounded-md transition-all",
            scrolled ? "bg-surface-muted shadow-subtle" : "bg-white/80 backdrop-blur-sm shadow-md"
          )}>
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeTab === item.name && !item.external

              return (
                <React.Fragment key={item.name}>
                  {item.external ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classNames(
                        "flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md transition-colors",
                        "text-primary hover:text-primary-dark hover:bg-primary/5"
                      )}
                    >
                      <span>{item.name}</span>
                      <Icon size={14} />
                    </a>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={() => setActiveTab(item.name)}
                      className={`
                        relative cursor-pointer text-sm font-medium px-4 py-2 rounded-md transition-colors
                        ${isActive 
                          ? "text-primary" 
                          : "text-gray-700 hover:text-primary hover:bg-gray-100/50"
                        }
                      `}
                    >
                      <span className="flex items-center gap-1.5">
                        <Icon size={16} />
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 mx-3 bg-primary"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )}
                  
                  {/* Add separator except for the last item */}
                  {!item.external && index < navItems.length - 2 && (
                    <span className="h-5 w-px bg-gray-200" />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-0 top-0 bg-white z-40 pt-20"
            >
              <nav className="flex flex-col gap-2 px-6 py-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name && !item.external

                  if (item.external) {
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-primary/5 text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <Icon size={18} />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => {
                        setActiveTab(item.name)
                        setIsMenuOpen(false)
                      }}
                      className={`
                        flex items-center gap-3 p-4 rounded-lg
                        ${isActive 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}