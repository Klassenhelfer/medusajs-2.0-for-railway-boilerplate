import {Suspense} from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ShopLogo from "@modules/common/icons/shop-logo"
import CartButton from "@modules/layout/components/cart-button"
import ShoppingCart from "@modules/common/icons/shopping-cart";
import NavLinkHighlighter from "@modules/layout/templates/nav/nav-link-highlighter";


export default async function Nav() {
    return (
        <nav className="sticky left-0 top-0 w-full py-3 border-b bg-white z-50">
            <div className="content-small-container flex justify-between gap-4">
                <NavLinkHighlighter />

                <LocalizedClientLink href="/" data-testid="nav-store-link">
                    <ShopLogo/>
                </LocalizedClientLink>

                <ul className="hidden md:flex gap-10">
                    <li className="leading-8 text-[#333] hover:text-[#d97706] font-semibold">
                        <a href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}`} data-testid="nav-home-link">Startseite</a>
                    </li>
                    <li className="leading-8 text-[#333] hover:text-[#d97706] font-semibold cursor-pointer">
                        <a href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/tools`} data-testid="nav-tool-link">Online-Tools</a>
                    </li>
                    <li className={`leading-8 font-semibold cursor-pointer text-[#333] hover:text-[#d97706]`} data-route="">
                        <LocalizedClientLink href="/" data-route="" data-testid="nav-products-link">Alle Produkte</LocalizedClientLink>
                    </li>
                    <li className={`leading-8 font-semibold cursor-pointer text-[#333] hover:text-[#d97706]`} data-route="/account">
                        <LocalizedClientLink href="/account" data-testid="nav-account-link">Account</LocalizedClientLink>
                    </li>

                    <Suspense
                        fallback={
                            <li className="h-9 flex items-center gap-2  rounded-full cursor-pointer px-3 border bg-white">
                                <LocalizedClientLink
                                    href="/cart"
                                    data-testid="nav-cart-link"
                                >
                                    <ShoppingCart />
                                </LocalizedClientLink>
                            </li>
                        }
                    >
                        <CartButton/>
                    </Suspense>
                </ul>
            </div>
        </nav>
    )
}
