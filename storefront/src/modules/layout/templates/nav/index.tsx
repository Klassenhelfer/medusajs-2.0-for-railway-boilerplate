import {Suspense} from "react"
import {listRegions} from "@lib/data/regions"
import {StoreRegion} from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ShopLogo from "@modules/common/icons/shop-logo"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import ShoppingCart from "@modules/common/icons/shopping-cart";

export default async function Nav() {
    const regions = await listRegions().then((regions: StoreRegion[]) => regions)

    return (
        <nav className="sticky left-0 top-0 w-full py-3 border-b bg-white z-50">
            <div className="content-small-container flex justify-between gap-4">
                <LocalizedClientLink href="/" data-testid="nav-store-link">
                    <ShopLogo/>
                </LocalizedClientLink>

                <ul className="hidden md:flex gap-10">
                    <li className="leading-8 text-[#333] hover:text-[#d97706] font-semibold">
                        <LocalizedClientLink href="/" data-testid="nav-home-link">Startseite</LocalizedClientLink>
                    </li>
                    <li className="leading-8 text-[#333] hover:text-[#d97706] font-semibold cursor-pointer">
                        <LocalizedClientLink href="/tools" data-testid="nav-tool-link">Online-Tools</LocalizedClientLink>
                    </li>

                    <li className="leading-8 text-[#333] font-semibold cursor-pointer">
                        <LocalizedClientLink
                            href="/account"
                            data-testid="nav-account-link"
                        >
                            Account
                        </LocalizedClientLink>
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
