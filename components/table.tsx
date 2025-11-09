import { CiStar } from "react-icons/ci";

const Tables: React.FC = () => {
  return (
    <div className="flex justify-center p-2">
      <table className="min-w-[800px] border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <thead className="bg-amber-400 text-gray-900">
          <tr>
            <th className="py-3 px-4 text-start font-semibold">Day</th>
            <th className="py-3 px-4 text-start font-semibold">Class</th>
            <th className="py-3 px-4 text-start font-semibold">Instructor</th>
            <th className="py-3 px-4 text-start font-semibold">Time</th>
            <th className="py-3 px-4 text-start font-semibold">Book</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
          <tr className="hover:bg-gray-50 duration-200">
            <td className="py-3 px-4">Saturday</td>
            <td className="py-3 px-4">Yoga Flow</td>
            <td className="py-3 px-4">Sarah M.</td>
            <td className="py-3 px-4">08:00 - 09:00</td>
            <td className="py-3 px-4">
              <button className="bg-amber-400 flex items-center justify-center hover:bg-amber-300 duration-200 px-4 py-1 rounded-lg text-sm font-semibold">
                Book <CiStar className="w-4 h-5" />
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 duration-200">
            <td className="py-3 px-4">Monday</td>
            <td className="py-3 px-4">Power Yoga</td>
            <td className="py-3 px-4">Daniel R.</td>
            <td className="py-3 px-4">17:00 - 18:00</td>
            <td className="py-3 px-4">
              <button className="bg-amber-400 flex items-center justify-center hover:bg-amber-300 duration-200 px-4 py-1 rounded-lg text-sm font-semibold">
                Book <CiStar className="w-4 h-5" />
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 duration-200">
            <td className="py-3 px-4">Wednesday</td>
            <td className="py-3 px-4">Relax & Stretch</td>
            <td className="py-3 px-4">Lily A.</td>
            <td className="py-3 px-4">19:30 - 20:30</td>
            <td className="py-3 px-4">
           <button className="bg-amber-400 flex items-center justify-center hover:bg-amber-300 duration-200 px-4 py-1 rounded-lg text-sm font-semibold">
                Book <CiStar className="w-4 h-5" />
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 duration-200">
            <td className="py-3 px-4">Friday</td>
            <td className="py-3 px-4">Morning Yoga</td>
            <td className="py-3 px-4">Chris B.</td>
            <td className="py-3 px-4">07:00 - 08:00</td>
            <td className="py-3 px-4">
              <button className="bg-amber-400 flex items-center justify-center hover:bg-amber-300 duration-200 px-4 py-1 rounded-lg text-sm font-semibold">
                Book <CiStar className="w-4 h-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
