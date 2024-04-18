import { Document, Model } from "mongoose";
import Subscriber from "../../models/subscriber.model";

interface MonthData {
    month: string;
    count: number;
}

interface Subscriber extends Document {
    createdAt: Date;
}


export async function generateAnalyticsData<T extends Document>(
    model: Model<T>
): Promise<{ last7Months: MonthData[] }> {
    const last7Months: MonthData[] = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    for (let i = 6; i >= 0; i--) {
        const endDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - i * 28
        );

        const startDate = new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate() - 28
        );

        const monthYear = endDate.toLocaleString("default", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

        // const count = await model.countDocuments({
        //     createdAt: {
        //         $gte: startDate,
        //         $lt: endDate,
        //     },
        // }) || 0;

        const model: Model<Subscriber> = require("./yourModel");

        const filter: Partial<Record<keyof Subscriber, any>> = {
            createdAt: {
                $gte: startDate,
                $lt: endDate,
            },
        };

        // Use the filter to count documents
        const count = await model.countDocuments(filter);

        last7Months.push({ month: monthYear, count });
    }
    return { last7Months };
}