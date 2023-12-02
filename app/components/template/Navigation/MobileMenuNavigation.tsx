import Link from "next/link";
import { navigation } from "@/utils/arrays";

export default function MobileMenuNavigation() {
  return (
    <div className="flow-root mt-6">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="pt-3 pb-5 space-y-2">
          {navigation.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg dark:text-gray-100"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
