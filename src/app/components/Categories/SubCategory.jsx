import Link from "next/link"


const SubCategory = () => {
    const steps = [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        "Ask for paradise & protection from fire",
        "Dua to remain steadfast on the religion",
        "Dua of good outcome in all deeds",
        "Seeking whatever good Allah can bestow",
        "Shelter from horror, misery, evil consequences and rejoicing of the enemy"
      ]
  return (
    <div className="w-full px-5">
    <div className="relative">
      {/* Dotted vertical line */}
      <div 
        className="absolute left-2.5 top-4 h-[calc(100%-32px)] w-0.5"
        style={{
          background: 'repeating-linear-gradient(to bottom, #86efac 0, #86efac 4px, transparent 4px, transparent 8px)'
        }}
      />
      
      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
              <div className="h-3 w-3 rounded-full bg-green-600" />
            </div>
            <Link href='#' className="text-sm text-gray-600 pt-0.5">{step}</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SubCategory
