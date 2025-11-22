import { School, CheckCircle, FileText, School2 } from "lucide-react";

interface Activity {
    id: number;
    type: "school_registration" | "assignment_completed" | "student_application" | "school_registration_alt";
    title: string;
    description: string;
    icon: typeof School;
    iconBg: string;
}

const activities: Activity[] = [
    {
        id: 1,
        type: "school_registration",
        title: "Nuevo registro de colegio",
        description: '"Oakridge International" está pendiente de aprobación.',
        icon: School,
        iconBg: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        type: "assignment_completed",
        title: "Ciclo de asignación completado",
        description: "Ciclo #2024-Q2 finalizado exitosamente.",
        icon: CheckCircle,
        iconBg: "bg-green-100 text-green-600",
    },
    {
        id: 3,
        type: "student_application",
        title: "Nueva solicitud de estudiante",
        description: "ID #ST8923 requiere verificación.",
        icon: FileText,
        iconBg: "bg-orange-100 text-orange-600",
    },
    {
        id: 4,
        type: "school_registration_alt",
        title: "Nuevo registro de colegio",
        description: '"Maplewood High" está pendiente de aprobación.',
        icon: School2,
        iconBg: "bg-blue-100 text-blue-600",
    },
];

export default function RecentActivity() {
    return (
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
                {activities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                        <div key={activity.id} className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.iconBg}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900">{activity.title}</p>
                                <p className="text-sm text-gray-600">{activity.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
