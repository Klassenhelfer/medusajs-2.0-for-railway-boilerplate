"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment, ReactNode, useEffect } from "react"

interface SlideOverProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const SlideOver = ({ isOpen, onClose, children }: SlideOverProps) => {
    // Prevent page scrolling when SlideOver is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        return () => document.body.classList.remove("overflow-hidden")
    }, [isOpen])

    return (
        <Popover className="h-full flex">
            <>
                {/* Background Overlay */}
                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition-opacity ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-gray-200/75 dark:bg-gray-800/75 z-40"
                        onClick={onClose} // Close when clicking outside
                    />
                </Transition>

                {/* SlideOver Panel */}
                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition-transform ease-out duration-300"
                    enterFrom="translate-x-[100%]"
                    enterTo="translate-x-0"
                    leave="transition-transform ease-in duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[100%]"
                >
                    <Popover.Panel className="fixed top-0 right-0 w-full max-w-md h-screen px-6 py-24 z-50 bg-white dark:bg-gray-900 shadow-xl">
                        {children}
                    </Popover.Panel>
                </Transition>
            </>
        </Popover>
    )
}

export default SlideOver