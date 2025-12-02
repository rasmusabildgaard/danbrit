/**
 * Campaigns Page
 * Administrer kampagner og tilbud til kundesegmenter
 */

export default function CampaignsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Kampagner</h1>
        <p className="text-gray-600">Administrer kampagner og tilbud til kundesegmenter</p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option>Alle kampagner</option>
            <option>Aktive</option>
            <option>Planlagte</option>
            <option>Afsluttede</option>
          </select>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          + Ny kampagne
        </button>
      </div>

      {/* Campaigns Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            name: 'Black Friday 2024', 
            status: 'active',
            segment: 'Alle kunder',
            discount: '20%',
            validFrom: '25. nov 2024',
            validTo: '2. dec 2024'
          },
          { 
            name: 'Premium Forhandler Bonus', 
            status: 'active',
            segment: 'Premium Forhandlere',
            discount: '25%',
            validFrom: '1. jan 2024',
            validTo: '31. dec 2024'
          },
          { 
            name: 'Julekampagne 2024', 
            status: 'scheduled',
            segment: 'Alle kunder',
            discount: '15%',
            validFrom: '10. dec 2024',
            validTo: '24. dec 2024'
          },
          { 
            name: 'Efterårssalg', 
            status: 'ended',
            segment: 'Alle kunder',
            discount: '10%',
            validFrom: '1. okt 2024',
            validTo: '31. okt 2024'
          },
        ].map((campaign, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{campaign.name}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  campaign.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : campaign.status === 'scheduled'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {campaign.status === 'active' ? 'Aktiv' : campaign.status === 'scheduled' ? 'Planlagt' : 'Afsluttet'}
                </span>
              </div>
              
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Målgruppe</dt>
                  <dd>{campaign.segment}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Rabat</dt>
                  <dd className="font-semibold text-green-600">{campaign.discount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Periode</dt>
                  <dd>{campaign.validFrom} - {campaign.validTo}</dd>
                </div>
              </dl>
            </div>
            
            <div className="px-6 py-3 bg-gray-50 border-t flex justify-end gap-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">Dubliker</button>
              <button className="text-sm text-blue-600 hover:underline">Rediger</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

