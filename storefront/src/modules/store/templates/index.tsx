import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import MegaDeal from "@modules/store/components/mega-deal";

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
        <div
            className="content-small-container min-height"
            data-testid="category-container"
        >
          <MegaDeal />

          <div className="flex gap-6 flex-col small:flex-row small:items-start">
            {false && (<RefinementList sortBy={sort} />)}
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                  sortBy={sort}
                  page={pageNumber}
                  countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
  )
}

export default StoreTemplate
