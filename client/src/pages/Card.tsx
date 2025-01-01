import Button from "../components/ui/Button";


export default function Card() {
    return <div>
        <div className="border-8 border-l-red-700 border-t-0 border-b-0 border-r-0 bg-zinc-300 w-full py-2 px-4 rounded-md">
            
            <div className="flex justify-between flex-col p-4">
                <div className="flex items-center gap-4">
                    <p className="text-lg font-bold">create:</p>
                    <p className="text-gray-600">30.12.2024</p>
                </div>
                <p className="text-lg font-medium ">Go to Gym
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam provident assumenda voluptas incidunt ipsum ea quam quae quibusdam quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam provident assumenda voluptas incidunt ipsum ea quam quae quibusdam quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam provident assumenda voluptas incidunt ipsum ea quam quae quibusdam quidem?
                </p>
                
            </div>
            
            <div className="flex items-center gap-4 justify-end p-4">
                <Button text='done'/>
                <Button text='edit'/>
                <Button text='delete'/>
            </div>

        </div>
    </div>;
}
