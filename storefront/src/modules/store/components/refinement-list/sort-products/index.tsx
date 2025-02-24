"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Neueste zuerst",
  },
  {
    value: "price_asc",
    label: "Preis aufsteigen",
  },
  {
    value: "price_desc",
    label: "Preis absteigend",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <FilterRadioGroup
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
