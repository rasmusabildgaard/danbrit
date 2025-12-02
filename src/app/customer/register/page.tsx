/**
 * Kunde Registrering
 * Opret ny B2B kundekonto
 */

export default function CustomerRegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Bliv kunde</h1>
            <p className="text-gray-600 mt-2">
              Opret en erhvervskonto hos Danbrit Direct
            </p>
          </div>

          <form className="space-y-6">
            {/* Virksomhedsinfo */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Virksomhed</h2>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Virksomhedsnavn *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  CVR-nummer *
                </label>
                <input
                  type="text"
                  id="vatNumber"
                  name="vatNumber"
                  required
                  pattern="[0-9]{8}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="12345678"
                />
              </div>
            </div>

            {/* Kontaktinfo */}
            <div className="space-y-4 border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900">Kontaktperson</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Navn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Adgangskode */}
            <div className="space-y-4 border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900">Adgangskode</h2>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Adgangskode *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Mindst 8 tegn</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Bekræft adgangskode *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Samtykke */}
            <div className="space-y-3 border-t pt-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="rounded text-blue-600 mt-1"
                />
                <span className="text-sm text-gray-600">
                  Jeg accepterer{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">handelsbetingelserne</a>
                  {' '}og{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">privatlivspolitikken</a> *
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  className="rounded text-blue-600 mt-1"
                />
                <span className="text-sm text-gray-600">
                  Ja tak, jeg vil gerne modtage nyheder og tilbud på e-mail
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Opret konto
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Har du allerede en konto?{' '}
              <a href="/customer/login" className="text-blue-600 hover:underline font-medium">
                Log ind
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

