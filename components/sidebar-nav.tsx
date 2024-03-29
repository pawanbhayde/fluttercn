import { docsConfig } from "@/config/docs";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="container relative">
        <nav className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-2.3rem)] w-full shrink-0 md:sticky md:block">
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <Link
                            href={item.href}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </Link>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
