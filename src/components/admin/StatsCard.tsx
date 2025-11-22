interface StatsCardProps {
    title: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative";
}

export default function StatsCard({ title, value, change, changeType }: StatsCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">{title}</p>
            <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</h3>
                {change && (
                    <span
                        className={`text-sm font-semibold ${changeType === "positive" ? "text-green-600" : "text-orange-600"
                            }`}
                    >
                        {changeType === "positive" ? "+" : ""}{change}
                    </span>
                )}
            </div>
        </div>
    );
}
