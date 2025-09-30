import Image from "next/image";
import Link from "next/link";

// Feature card component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  alt,
  color,
}: FeatureCardProps & { color?: string }) => (
  <article className="flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5">
    <figure
      className={`flex size-12 shrink-0 items-center justify-center rounded-full p-3 ${
        color || "bg-white/10"
      }`}
    >
      <Image
        alt={alt}
        loading="lazy"
        width={24}
        height={24}
        className="brightness-0 invert"
        src={icon || "/placeholder.svg"}
      />
    </figure>
    <div className="flex flex-col items-start gap-1">
      <h5 className="text-lg font-medium text-white">{title}</h5>
      <p className="text-pretty text-white/70">{description}</p>
    </div>
  </article>
);

// Main component
export default function ProductivitySection() {
  const features = [
    {
      title: "Smart Card Organization",
      description:
        "Organize and access information across devices with intelligent categorization. Streamline workflows with our innovative card-based system that adapts to your needs.",
      icon: "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
      alt: "Smart Card Organization",
      color: "bg-blue-500/40",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Boost productivity with intelligent assistant capabilities. Experience AI-driven automation that understands your workflow and helps accomplish more with less effort.",
      icon: "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
      alt: "AI-Powered Automation",
      color: "bg-green-500/40",
    },
    {
      title: "Immersive Digital Experiences",
      description:
        "Build stunning, interactive applications with our next-gen platform. Create immersive 3D experiences while maintaining enterprise-grade security and performance.",
      icon: "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
      alt: "Immersive Digital Experiences",
      color: "bg-purple-500/40",
    },
    {
      title: "Hardware Innovation",
      description:
        "Cutting-edge hardware solutions that integrate seamlessly with software. Advanced processing units and interface technologies for optimal performance.",
      icon: "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
      alt: "Hardware Innovation",
      color: "bg-orange-500/40",
    },
    {
      title: "Cross-Platform Integration",
      description:
        "Seamlessly connect and synchronize across all your devices and platforms. Multi-platform integration ensures your data and workflows are always accessible.",
      icon: "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
      alt: "Cross-Platform Integration",
      color: "bg-cyan-500/40",
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Enable real-time collaboration tools for teams working on complex projects. Advanced security protocols ensure safe and efficient team coordination.",
      icon: "https://assets.basehub.com/fa068a12/F8riNXVtoCEr_slSKlQKE/message-circle.svg",
      alt: "Real-Time Collaboration",
      color: "bg-pink-500/40",
    },
  ];

  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28">
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky bottom-0 top-[calc(var(--header-height,80px)+40px)] flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-start self-start">
            {/* Badge */}
            <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-white/10 px-3.5 pb-px text-sm font-medium text-white/70 md:text-base">
              Innovation
            </h3>

            {/* Main heading */}
            <div className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-left">
              <h4
                className="text-white"
                title="Next-Generation Technology Solutions"
              >
                Next-Generation Technology Solutions
              </h4>
            </div>

            {/* Description */}
            <p className="max-w-screen-md text-pretty text-lg font-light text-white/70 md:text-xl text-left">
              Transform your workflow with our cutting-edge software products
              and hardware solutions. From intelligent card organization to
              immersive digital experiences, we provide the tools you need to
              stay ahead in the digital age.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 md:order-3">
            <Link
              href="/hardware"
              className="gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0 bg-blue-600 hover:bg-blue-700 text-white border-blue-700 inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
            >
              Explore Hardware
            </Link>
            <Link
              href="/products"
              className="gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0 bg-white/10 hover:bg-white/20 text-white border border-white/20 inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              alt={feature.alt}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
