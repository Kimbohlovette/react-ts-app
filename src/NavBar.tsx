import React from "react";
import logo from "./shared/logo.png"

export interface NavItem {
    name: string,
    link: string
}

export class NavBar extends React.Component {
    constructor(props:any){
        super(props)
        this.state = {
            isOpen: false
        };
        this.toggleClose = this.toggleClose.bind(this)
    }

    state: {isOpen: boolean} = {isOpen: false}

    navItems: NavItem[] = [ 
        {
            name: "About", 
            link: "/about"
        },
        {
            name: "Services", 
            link: "/services"
        },
        {
            name: "Products", 
            link: "/products"
        },
        {
            name: "Contacts", 
            link: "/contacts"
        },
    ]

    navs = this.navItems.map(item =>{
        return (
        <a href={item.link} className="">
            <li className=" text-slate-600 hover:text-blue-500">{item.name}</li>
        </a>
        );
    });

    toggler:{
        close: JSX.Element,
        open:JSX.Element,
     } = {
        close: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></svg>,
        open: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>,
     }

     dropdownMenu: JSX.Element = (<div className="dropdown absolute left-0 top-full w-full bg-green-50">
                                    <ul className="flex flex-col gap-4 py-8 text-left p-4">
                                        {this.navs}
                                    </ul> 
                                </div>)

     toggleClose = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        });
     }

    render(): React.ReactNode {
        return (
            <div className="px-8">
                <div className="flex flex-row justify-between items-center border-b py-4 gap-4 relative">
                    <div className="logo hover:cursor-pointer">
                        <img src={logo} className="max-h-8 aspect-auto object-center object-cover w-auto"  alt="logo" />
                    </div>

                    <nav>
                        <div className="mobile block sm:hidden">
                            <div className="toggler bg-slate-100 text-slate-600 text-2xl">
                                <button className="p-2 border rounded-md text-slate-60 bg-slate-50 shadow-sm h-fit" onClick={this.toggleClose}>{this.state.isOpen ? this.toggler.close:this.toggler.open}</button> 
                            </div>
                        {this.state.isOpen? this.dropdownMenu: null}
                        </div>
                        <div className="desktop hidden sm:block">
                           <ul className="flex flex-row gap-4">
                                {this.navs}
                            </ul> 
                        </div>
                        
                    </nav>

                    <div className="hidden sm:block auth text-slate-600 text-sm">
                        <button className="py-2 px-5 rounded-sm whitespace-nowrap hover:shadow-sm hover:text-blue-500">Sign up</button>
                        <button className="py-2 px-5 rounded-sm whitespace-nowrap hover:shadow-sm hover:text-blue-500">Login</button>
                    </div> 
                </div>
            </div>
        );
    }
}


