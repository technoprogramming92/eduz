import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import SectionHeader from "./section-header";
import SmallTitle from "./small-title";

const features = [
  {
    image: "/images/studentinfo.webp",
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Communication Hub",
    description:
      "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
    href: "/features/communication",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
    href: "/features/staff-management",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Transport Management",
    description:
      "Real-time transport tracking, route management, and automated notifications for safe student transportation",
    href: "/features/transport",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Analytics & Reports",
    description:
      "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
    href: "/features/analytics",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Resource Management",
    description:
      "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
    href: "/features/resources",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Attendance System",
    description:
      "Automated attendance tracking for students and staff with instant notification capabilities",
    href: "/features/attendance",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Examination Portal",
    description:
      "Complete examination management system from scheduling to result publication with secure access",
    href: "/features/examinations",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Notice Board",
    description:
      "Digital notice board for announcements, events, and important updates with targeted distribution",
    href: "/features/announcements",
  },
  {
    image: "/images/studentinfo.webp",
    title: "Security & Access",
    description:
      "Role-based access control with data encryption and secure backups for complete peace of mind",
    href: "/features/security",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
        <SmallTitle title="Features" />
        <SectionHeader
          title="All-in-One School Management Platform"
          description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
        />
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {features.map((item, i) => {
            return (
              <Card className="overflow-hidden" key={i}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    alt="AI Video Editor Interface"
                    className="object-cover"
                    height="300"
                    src={item.image}
                    width="600"
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
