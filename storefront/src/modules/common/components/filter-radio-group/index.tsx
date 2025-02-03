import {clx} from "@medusajs/ui"
import Checkmark from "@modules/common/icons/checkmark";

type FilterRadioGroupProps = {
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
    return (
        <div className="relative flex flex-col gap-4 z-10">
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <button
                        key={item.value}
                        data-testid={`${dataTestId}-${item.value}`}
                        onClick={() => handleChange(item.value)}
                        className={clx(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-lg border",
                            {
                                "border-blue-500 bg-white text-blue-700":
                                    item.value === value,
                                "border-gray-300 bg-white text-gray-700 hover:bg-gray-50":
                                    item.value !== value,
                            }
                        )}
                    >
                        <div
                            className={clx(
                                "w-5 h-5 flex items-center justify-center border rounded-[0.2rem]",
                                {
                                    "bg-blue-500 border-transparent text-white": item.value === value,
                                    "bg-white border-gray-300 text-transparent": item.value !== value,
                                }
                            )}
                        >
                            {item.value === value && (
                                <Checkmark/>
                            )}
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterRadioGroup
