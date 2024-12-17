"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, DollarSign, GraduationCap, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmallTitle from "./small-title";
import SectionHeader from "./section-header";

const features = [
  {
    tab: "Students",
    icon: Users,
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
    image: "/images/studentinfo.webp?height=400&width=600",
    subFeatures: [
      "Personal Information Tracking",
      "Enrollment Management",
      "Academic History Logging",
      "Parent/Guardian Contact Details",
      "Health and Medical Records",
      "Extracurricular Activity Tracking",
    ],
  },
  {
    tab: "Academics",
    icon: GraduationCap,
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
    image: "/images/studentinfo.webp?height=400&width=600",
    subFeatures: [
      "Curriculum Design",
      "Lesson Planning",
      "Exam Scheduling",
      "Grading System",
      "Report Card Generation",
      "Academic Performance Analytics",
    ],
  },
  {
    tab: "Finance",
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
    image: "/images/studentinfo.webp?height=400&width=600",
    subFeatures: [
      "Online Fee Payment",
      "Automated Invoicing",
      "Scholarship Management",
      "Expense Tracking",
      "Financial Reporting",
      "Payment Reminder System",
    ],
  },
  {
    tab: "Staff",
    icon: ClipboardList,
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
    href: "/features/staff-management",
    image: "/images/studentinfo.webp?height=400&width=600",
    subFeatures: [
      "Staff Recruitment Tracking",
      "Attendance Management",
      "Performance Evaluation",
      "Professional Development Tracking",
      "Payroll Processing",
      "Leave Management",
    ],
  },
];

export function FeatureTabs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className=" sm:text-center">
          <SmallTitle title="Additional Features" />
          <SectionHeader
            title="All-in-One School Management Platform"
            description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
          />
        </div>
        <Tabs defaultValue="Students" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.tab}
                  value={feature.tab}
                  className="flex items-center gap-2 py-4"
                >
                  <Icon className="h-4 w-4" />
                  {feature.tab}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {features.map((feature) => (
            <TabsContent key={feature.tab} value={feature.tab}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-6">
                      <div className="grid gap-4">
                        {feature.subFeatures.map((subFeature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 rounded-lg border p-4"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                              {index + 1}
                            </div>
                            <div className="flex-1">{subFeature}</div>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={feature.href}>Learn More</Link>
                      </Button>
                    </div>
                    <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
