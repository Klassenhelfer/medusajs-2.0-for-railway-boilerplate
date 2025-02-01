import {Suspense} from "react"
import {listRegions} from "@lib/data/regions"
import {StoreRegion} from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ShopIcon from "@modules/common/icons/shop-logo"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
    const regions = await listRegions().then((regions: StoreRegion[]) => regions)

    return (
        <nav className="sticky left-0 top-0 w-full py-3 border-b bg-white z-50">
            <div className="content-small-container flex justify-between gap-4">
                <LocalizedClientLink href="/" data-testid="nav-store-link">
                    <ShopIcon/>
                </LocalizedClientLink>

                <ul className="hidden md:flex gap-10">
                    <li className="leading-8 text-[#333] hover:text-[#d97706] font-semibold">
                        <LocalizedClientLink href="/" data-testid="nav-store-link">Startseite</LocalizedClientLink>
                    </li>
                    <li className="leading-8 text-[#f59e0b] font-semibold cursor-pointer">Arbeitsmaterialien</li>

                    {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                        <LocalizedClientLink
                            className="hover:text-ui-fg-base"
                            href="/search"
                            scroll={false}
                            data-testid="nav-search-link"
                        >
                            Search
                        </LocalizedClientLink>
                    )}

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
                            <li className="leading-8 text-[#333] font-semibold cursor-pointer">
                                <LocalizedClientLink
                                    className="flex gap-2"
                                    href="/cart"
                                    data-testid="nav-cart-link"
                                >
                                    Cart (0)
                                </LocalizedClientLink>
                            </li>
                        }
                    >
                        <CartButton/>
                    </Suspense>
                    <SideMenu regions={regions}/>
                </ul>
            </div>
        </nav>
    )
}
