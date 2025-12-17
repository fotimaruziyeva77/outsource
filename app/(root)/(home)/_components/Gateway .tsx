import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Zero-Tax Environment",
    desc: "0% corporate tax, VAT, customs duties, and social payments for IT companies.",
    icon: "/Group.png",
  },
  {
    title: "Government Support",
    desc: "Full assistance with legal setup, visas, relocation, licenses, and compliance.",
    icon: "/Group (1).png",
  },
  {
    title: "Ready-to-use Infrastructure",
    desc: "Modern office spaces with enterprise-grade internet and 24/7 facility management.",
    icon: "/Group 546.png",
  },
  {
    title: "Talent Access",
    desc: "Over 5,000 young multilingual specialists entering the market annually.",
    icon: "/Group (2).png",
  },
  {
    title: "One-stop-shop program",
    desc: "Company registration, banking, certifications – handled through a single window.",
    icon: "/Group 583.png",
  },
  {
    title: "Global Growth Programs",
    desc: "Accelerators, grants, soft-landing for international companies, BPO scaling support.",
    icon: "/Clip path group.png",
  },
]

export default function Features() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="w-18 h-18 rounded-full bg-[#7DBA28] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
										
                  />
                </div>
 
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
