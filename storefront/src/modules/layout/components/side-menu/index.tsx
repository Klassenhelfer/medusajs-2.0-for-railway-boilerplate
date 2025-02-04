"use client"

import { useState } from "react"
import SlideOver from "@modules/common/components/slideover"
import Menu from "@modules/common/icons/menu"
import Close from "@modules/common/icons/close"
import CaretRight from "@modules/common/icons/caret-right"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NavLinkHighlighter from "@modules/layout/templates/nav/nav-link-highlighter"

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="h-full flex items-center">
            <button
                onClick={() => setIsOpen(true)}
                className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
            >
                <Menu />
            </button>

            <SlideOver isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Close onClick={() => setIsOpen(false)} />
                <NavLinkHighlighter />

                <ul aria-label="Links zu Klassenhelfer Unterseiten">
                    <li className="text-[#333] text-2xl font-semibold mb-6">
                        <a href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}`}
                           data-testid="nav-home-link"
                           onClick={() => setIsOpen(false)}>
                            Startseite
                        </a>
                    </li>
                    <li className="text-[#333] text-2xl font-semibold mb-6">
                        <a href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/tools`}
                           data-testid="nav-tool-link"
                           onClick={() => setIsOpen(false)}>
                            Online-Tools
                        </a>
                        <ul className="pt-4 pl-4" aria-label="Untermenü Online-Tools">
                            <li className="text-lg flex items-center gap-2">
                                <CaretRight />
                                <a href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/suchsel`}
                                   data-testid="nav-suchsel-link"
                                   onClick={() => setIsOpen(false)}>
                                    Suchsel Generator
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="text-[#333] text-2xl font-semibold mb-6" data-route="">
                        <LocalizedClientLink href="/" data-testid="nav-products-link" onClick={() => setIsOpen(false)}>
                            Alle Produkte
                        </LocalizedClientLink>
                    </li>
                    <li className="text-[#333] text-2xl font-semibold mb-6" data-route="/account">
                        <LocalizedClientLink href="/account" data-testid="nav-account-link" onClick={() => setIsOpen(false)}>
                            Account
                        </LocalizedClientLink>
                    </li>
                    <li className="text-[#333] text-2xl font-semibold mb-6" data-route="/cart">
                        <LocalizedClientLink href="/cart" data-testid="nav-cart-link" onClick={() => setIsOpen(false)}>
                            Einkaufswagen
                        </LocalizedClientLink>
                    </li>
                </ul>
            </SlideOver>
        </div>
    )
}

export default SideMenu