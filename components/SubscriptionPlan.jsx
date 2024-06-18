
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Free</h2>
            <p className="text-4xl font-bold mb-2">$0</p>
            <p className="text-sm mb-4">Free for your whole team</p>
            <p className="text-sm mb-6">For individuals or teams looking to organize anything.</p>
            <Button className="bg-purple-200 text-purple-800 hover:bg-purple-300 hover:text-purple-900">
              Get started
            </Button>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Standard</h2>
            <p className="text-4xl font-bold mb-2">$6</p>
            <p className="text-sm mb-4">Per user per month</p>
            <p className="text-sm mb-6">For teams that need to manage more work.</p>
            <Button className="bg-blue-200 text-blue-800 hover:bg-blue-300 hover:text-blue-900">Upgrade Now</Button>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Premium</h2>
            <p className="text-4xl font-bold mb-2">$12</p>
            <p className="text-sm mb-4">Per user per month</p>
            <p className="text-sm mb-6">Best for teams that need to track multiple projects.</p>
            <Button className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300 hover:text-yellow-900">
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}