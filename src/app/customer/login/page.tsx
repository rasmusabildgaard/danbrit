/**
 * Kunde Login
 * Login-side for B2B kunder
 */

export default function CustomerLoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Log ind</h1>
            <p className="text-gray-600 mt-2">
              Velkommen tilbage til Danbrit Direct
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="din@email.dk"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Adgangskode
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-600">Husk mig</span>
              </label>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Glemt adgangskode?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Log ind
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Har du ikke en konto?{' '}
              <a href="/customer/register" className="text-blue-600 hover:underline font-medium">
                Bliv kunde
              </a>
            </p>
          </div>
        </div>

        {/* Admin link */}
        <div className="mt-6 text-center">
          <a href="/admin/login" className="text-sm text-gray-500 hover:text-gray-700">
            Admin login →
          </a>
        </div>
      </div>
    </div>
  )
}

