import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar({ aboutRef,  contactRef, featureProjectRef , expiranceRef }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll to the section
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF] z-50">
            <nav aria-label="Global" className="mx-auto flex w-full max-w-7xl items-center justify-between py-3 px-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">AV Logo</span>
                        <img 
                            src="logoAV.png" 
                            className="w-20 h-30" 
                            alt="Logo"
                        />
                    </a>
                </div>

                {/* Centered Desktop Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
                    <PopoverGroup className="flex gap-x-12 text-sm font-semibold leading-6 text-black">
                        <a href='#about' className="relative scroll-smooth">
                                <span className='text-[#032388] font-sans font-semibold'>01.</span>
                                About
                        </a>
                        <Popover className="relative">
                            <PopoverButton
                              onClick={() => scrollToSection(expiranceRef)} 
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black"
                            >
                                <a href='#expirance' className="relative scroll-smooth">

                            <span className='text-[#032388] font-sans font-semibold'>02.</span> Experience
                            </a>
                            </PopoverButton>
                        </Popover>
                        <Popover className="relative">
                            <PopoverButton
                                onClick={() => scrollToSection(featureProjectRef)}  
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black"
                            >
                           <a href='#work' className="relative scroll-smooth">

                            <span className='text-[#032388] font-sans font-semibold'>03.</span> Work
                            </a>
                            </PopoverButton>
                        </Popover>
                        <Popover className="relative">
                            <PopoverButton
                                onClick={() => scrollToSection(contactRef)}  
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black"
                            >
                            <span className='text-[#032388] font-sans font-semibold'>04.</span> Contact
                            </PopoverButton>
                        </Popover>
                    </PopoverGroup>
                </div>

                {/* Resume Button */}
                <div className="hidden lg:flex lg:justify-end">
                    <a href="https://docs.google.com/document/d/1pCKKVGNbeLMoDhFPVCzl4S6Vl0J3FLSt79wDQvqw3S0/edit" className="border border-[#032388] text-[#032388] px-6 py-3 rounded hover:bg-[#032388] hover:text-[#FFFF] transition duration-300">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#a2adcb]">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dialog */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#0a192f] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="Mobile Logo" src="logo-AB.png" className="h-12 w-auto" />
                        </a>
                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-[#a2adcb]">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a href="#" onClick={() => scrollToSection(aboutRef)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#a2adcb] hover:bg-gray-50">About</a>
                                <a href="#" onClick={() => scrollToSection(expiranceRef)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#a2adcb] hover:bg-gray-50">Experience</a>
                                <a href="#" onClick={() => scrollToSection(featureProjectRef)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#a2adcb] hover:bg-gray-50">Work</a>
                                <a href="#" onClick={() => scrollToSection(contactRef)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#a2adcb] hover:bg-gray-50">Contact</a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="block rounded-lg ml-6 mr-12 text-center text-base font-semibold leading-6 text-[#61f9d5] border-2 border-[#61f9d5] p-2">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
