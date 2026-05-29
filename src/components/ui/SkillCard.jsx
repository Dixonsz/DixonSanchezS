const SkillCard = ({ name, icon }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
    <img src={icon} alt={name} className="w-10 h-10" />
    <span className="text-sm text-gray-600 font-medium">{name}</span>
  </div>
)

export default SkillCard