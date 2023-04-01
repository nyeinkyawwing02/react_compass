import { useEffect, useState } from "react"

export default function Card() {
    let [plans, setPlans] = useState([]);
    const cardClass = {
        default: "flex flex-col p-6 mx-auto max-w-lg text-start bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8",
        active: "flex flex-col p-6 mx-auto max-w-lg text-start bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8 outline outline-8 outline-rose-400",
    };
    const url = 'http://localhost:3000/pricing';
    const planController = new AbortController();

    let fetchPlan = async () => {
        // fetching api data with timeout
        setTimeout(async () => {
            const data = await (
                await fetch(url, { signal: planController.signal })
            ).json();
            setPlans(data);
        }, Math.round(Math.random() * 8000));
    };

    useEffect(() => {
        fetchPlan();

        // cleanup function
        () => {
            planController.abort();
        }
    }, []);

    return (
        <div className="text-primary space-y-16 lg:grid lg:grid-cols-4 sm:gap-3 xl:gap-10 lg:space-y-0">
            {
                plans ?
                    plans.map((plan) => (
                        <div className={plan.active ? cardClass.active : cardClass.default} key={plan.id}>
                            <h4 className="mb-1 text-md font-semibold">Start</h4>
                            <h3 className="mb-4 tracking-wide text-3xl font-bold">{plan.plan_scheme}</h3>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                {
                                    plan.benefitial.map((benefit, index) => (
                                        <li className="flex items-center space-x-3" key={index}>
                                            <svg className="flex-shrink-0 w-5 h-5 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className="text-cyan">{benefit}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button type="button" className={plan.active ? "bg-primary text-white text-xl font-bold tracking-wider rounded py-2 mb-4" : "border-2 border-primary text-xl font-bold tracking-wider rounded py-2 mb-4"}>Buy</button>
                            <p className="text-black dark:text-white tracking-tight">{plan.short_description}</p>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}
