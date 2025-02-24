import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Klassenhelfer Shop",
  description: "Entdecke hochwertige, praktische Materialien, die dir bei der täglichen Unterrichtsvorbereitung und Durchführung helfen."
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
      <StoreTemplate
          sortBy={sortBy}
          page={page}
          countryCode={params.countryCode}
      />
  )
}
