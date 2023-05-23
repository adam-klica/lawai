import CasePredictionIcon from '../../../public/img/casePredictionIcon'
import ChatBotIcon from '../../../public/img/chatBotIcon'
import ContractReview from '../../../public/img/contractReviewIcon'
import DocumentAnalysisIcon from '../../../public/img/documentAnalysisIcon'
import IntellectualPropertyIcon from '../../../public/img/intelectualProperyIcon'
import LegalResearchIcon from '../../../public/img/legalResearchIcon'
import LegalComplianceIcon from '../../../public/img/legalComplianceIcon'
import { useRouter } from 'next/router'

const ToolsPicker = () => {
  const router = useRouter()
  const categories = [
    {
      name: 'Contract review',
      description:
        'You could use me to review contracts and identify potential legal issues or risks. By inputting the contract into the system, I could identify clauses that may need further scrutiny, such as ambiguous language or clauses that may violate relevant laws or regulations.',
      icon: <ContractReview />,
      href: 'casePrediction'
    },
    {
      name: 'Legal compliance',
      description:
        'You could use me to help businesses and organizations stay compliant with legal requirements. By inputting relevant data such as the industry and location of the business, I could provide information on relevant laws and regulations and help businesses understand how to comply with them.',
      icon: <LegalComplianceIcon />,
      href: 'legalCompliance'
    },
    {
      name: 'Intellectual property research',
      description:
        'You could use me to assist with intellectual property research, such as trademark and patent searches. By inputting relevant keywords or phrases, I could search databases and provide information on existing trademarks or patents that may be relevant.',
      icon: <IntellectualPropertyIcon />,
      href: 'propertyResearch'
    },
    {
      name: 'Chatbot',
      description:
        "You could use me to create a legal chatbot that can answer user questions and provide guidance on legal issues. By inputting relevant data such as the user's location and the type of legal issue, the chatbot could provide personalized advice and information.",
      icon: <ChatBotIcon />,
      href: 'chatBot'
    },
    {
      name: 'Case prediction',
      description:
        'You could use me to analyze past legal cases and predict the likely outcome of future cases. By inputting relevant data such as the facts of the case and legal precedents, I could provide users with a probability of success in court.',
      icon: <CasePredictionIcon />,
      href: 'casePrediction'
    },
    {
      name: 'Document analysis',
      description:
        'You could use me to analyze legal documents such as contracts or legal briefs to identify key clauses or arguments. I could help users understand legal terminology and provide context to help them interpret the document.',
      icon: <DocumentAnalysisIcon />,
      href: 'documentAnalysis'
    },
    {
      name: 'Legal research',
      description:
        'You could use me to search legal databases and provide information on legal topics, such as case law, statutes, and regulations. Users could input keywords or phrases related to their legal issue, and I could provide relevant information.',
      icon: <LegalResearchIcon />,
      href: 'legalResearch'
    }
  ]

  const toolClickedHandler = (href: string) => {
    router.push(`/${href}`)
  }
  return (
    <div>
      <div
        className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')"
        }}
      >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
          {categories.map((category) => {
            return (
              <div
                onClick={() => toolClickedHandler(category.href)}
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border hover:bg-slate-50 cursor-pointer"
              >
                {category.icon}
                <p className="text-xl font-medium text-slate-700 mt-3">{category.name}</p>
                <p className="mt-2 text-sm text-slate-500">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ToolsPicker
