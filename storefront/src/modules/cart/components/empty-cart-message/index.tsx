import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ShoppingCart from "@modules/common/icons/shopping-cart";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex flex-row gap-x-2 items-baseline"
      >
        Dein Einkaufwagen
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
          Du hast noch nichts in deinem Warenkorb. Lass uns das ändern! Nutze den Link unten, um kreative Unterrichtsmaterialien zu entdecken.
      </Text>
      <div>
        <InteractiveLink href="/">Jetzt stöbern</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
