import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <div className="flex items-center bg-amazon_blue">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}

export default Header;