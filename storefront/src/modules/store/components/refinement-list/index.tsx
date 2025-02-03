"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({ sortBy, 'data-testid': dataTestId }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="relative small:min-w-[250px] min-h-[calc(100vh-21.5rem)] bg-[#fff5f0] rounded-xl shadow-lg p-4 overflow-hidden">
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />

        <svg className="absolute top-0 -right-[4rem] z-0" aria-hidden="true" width="186" height="117" viewBox="0 0 186 117"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.12598 0C1.08691 7.65625 0 15.7012 0 24C0 75.3633 41.6377 117 93 117C144.362 117 186 75.3633 186 24C186 15.7012 184.913 7.65625 182.874 0H3.12598Z"
                  fill="#fee6d3"/>
        </svg>

        <svg className="absolute w-[15.5rem] -left-[0.5rem] -bottom-[1.25rem]" aria-hidden="true" width="294" height="229"
             viewBox="0 0 294 229" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M265.039 229C272.122 210.354 276 190.131 276 169C276 75.6641 200.336 0 107 0C66.3975 0 29.1396 14.3184 0 38.1816V229H265.039Z"
                  fill="#fee6d3"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M240 185H243.767V188.767H240V185ZM243.767 195.047H240V198.814H243.767V195.047ZM253.814 195.047H250.047V198.814H253.814V195.047ZM260.093 195.047H263.86V198.814H260.093V195.047ZM273.907 195.047H270.14V198.814H273.907V195.047ZM280.186 195.047H283.953V198.814H280.186V195.047ZM294 195.047H290.233V198.814H294V195.047ZM253.814 185H250.047V188.767H253.814V185ZM260.093 185H263.86V188.767H260.093V185ZM273.907 185H270.14V188.767H273.907V185ZM280.186 185H283.953V188.767H280.186V185ZM294 185H290.233V188.767H294V185ZM240 205.093H243.767V208.86H240V205.093ZM253.814 205.093H250.047V208.86H253.814V205.093ZM260.093 205.093H263.86V208.86H260.093V205.093ZM273.907 205.093H270.14V208.86H273.907V205.093ZM280.186 205.093H283.953V208.86H280.186V205.093ZM294 205.093H290.233V208.86H294V205.093Z"
                  fill="#fee6d3"/>
        </svg>
    </div>
  )
}

export default RefinementList
