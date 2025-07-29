import Image from "next/image";

interface ExclusiveFeature {
    id: string;
    title: string;
    checklist: string[];
    file_url: string;
    file_type: string;
}

interface CourseExclusiveFeaturesProps {
    features: ExclusiveFeature[];
    sectionName: string;
}

export default function CourseExclusiveFeatures({ features, sectionName }: CourseExclusiveFeaturesProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {sectionName}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="bg-gradient-card rounded-xl overflow-hidden shadow-lg hover-lift"
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={feature.file_url}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-3">
                                    {feature.checklist.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}