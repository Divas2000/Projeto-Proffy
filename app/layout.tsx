import { archivo, poppins } from './fonts';
import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${poppins.variable}`}>
      <body className="flex flex-col items-start gap-4 p-6 bg-purple-600">
        <h1 className="font-archivo text-4xl text-white">
          Proffy
        </h1>

        <form className="flex flex-col">
          <div className="relative before:content-[''] before:absolute before:top-3 before:left-[-1px] before:z-10 before:w-[2px] before:h-[48px] focus-within:before:bg-pink-500">
            <input 
              type="email" 
              placeholder="E-mail" 
              className="h-[72px] px-6 rounded border font-poppins border-gray-200 bg-gray-50 focus-visible:outline-none" 
            />
          </div>
        </form>

        <button 
          type="button" 
          className="py-10 px-16 rounded font-archivo font-bold text-xl text-white shadow-sm bg-purple-400"
        >
          Estudar
        </button>

        {children}
      </body>
    </html>
  );
}
