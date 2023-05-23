import { AppProps } from 'next/app'
import { BsPiggyBank } from 'react-icons/bs'
import {
  FaBalanceScale,
  FaHospital,
  FaUserSecret,
  FaTrademark,
  FaPassport,
  FaKey,
  FaUserTie,
  FaShoppingCart,
  FaHardHat,
  FaBalanceScaleLeft,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaChild,
  FaGavel,
  FaHandHoldingUsd,
  FaHome,
  FaShip,
  FaFileInvoice,
  FaHandsHelping
} from 'react-icons/fa'
import { GiTreeGrowth } from 'react-icons/gi'

const CategoryPick = ({ handleClickedCategory }) => {
  const categories = [
    {
      name: 'Banking and Debt Finance Law',
      icon: <BsPiggyBank color="white" size={50} />,
      description:
        'Banking and debt finance law covers a broad range of legal issues related to borrowing and lending money. It involves negotiating and drafting loan agreements, advising clients on debt financing structures, and representing clients in disputes arising from financial transactions.'
    },
    {
      name: 'Charity Law',
      icon: <FaHandsHelping color="white" size={50} />,
      description:
        'Charity law deals with the legal issues that arise in connection with charities, non-profits, and other philanthropic organizations. It involves issues such as the formation and registration of charities, compliance with tax regulations, and fundraising activities.'
    },
    {
      name: 'Civil Litigation Dispute Resolution Law',
      icon: <FaGavel color="white" size={50} />,
      description:
        'Civil litigation dispute resolution law involves resolving disputes between individuals and organizations, usually through court proceedings. It covers a broad range of legal issues, including breach of contract, negligence, and defamation.'
    },
    {
      name: 'Commercial Law',
      icon: <FaBuilding color="white" size={50} />,
      description:
        'Commercial law involves the legal issues that arise in business transactions, such as contracts, mergers and acquisitions, and intellectual property issues. It also covers issues related to employment, finance, and real estate.'
    },
    {
      name: 'Construction Law',
      icon: <FaHardHat color="white" size={50} />,
      description:
        'Construction law deals with the legal issues that arise in connection with the construction of buildings, roads, and other infrastructure projects. It involves drafting and negotiating contracts, resolving disputes between contractors and owners, and ensuring compliance with safety regulations.'
    },
    {
      name: 'Consumer Law',
      icon: <FaShoppingCart color="white" size={50} />,
      description:
        'Consumer law covers the legal issues that arise in connection with the sale of goods and services to consumers. It includes issues such as consumer protection, product liability, and advertising law.'
    },
    {
      name: 'Corporate Law',
      icon: <FaBriefcase color="white" size={50} />,
      description:
        'Corporate law involves the legal issues that arise in connection with the formation, governance, and dissolution of corporations. It covers a broad range of issues, including corporate finance, mergers and acquisitions, and securities law.'
    },
    {
      name: 'Criminal Law',
      icon: <FaBalanceScale color="white" size={50} />,
      description:
        'Criminal law covers the legal issues related to crime, including the prosecution and defense of criminal charges. It involves representing clients in criminal proceedings, negotiating plea deals, and working with law enforcement agencies.'
    },
    {
      name: 'Employment Law',
      icon: <FaUserTie color="white" size={50} />,
      description:
        'Employment law deals with the legal issues that arise in the employer-employee relationship. It covers a broad range of issues, including hiring and firing, discrimination and harassment, and wage and hour laws.'
    },
    {
      name: 'Environmental Law',
      icon: <GiTreeGrowth color="white" size={50} />,
      description:
        'Environmental law involves the legal issues related to the environment, including pollution control, natural resource conservation, and climate change. It involves advising clients on compliance with environmental'
    },
    {
      name: 'Family Law',
      icon: <FaChild color="white" size={50} />,
      description:
        'Family law deals with the legal issues that arise in the context of family relationships, such as divorce, child custody, and adoption. It involves representing clients in court proceedings and negotiating settlements.'
    },
    {
      name: 'Housing Law',
      icon: <FaHome color="white" size={50} />,
      description:
        'Housing law covers the legal issues related to housing and real estate, such as landlord-tenant disputes, property transactions, and zoning regulations. It involves representing clients in court proceedings and negotiating settlements.'
    },
    {
      name: 'Human Rights Law',
      icon: <FaBalanceScaleLeft color="white" size={50} />,
      description:
        'Human rights law involves the protection and promotion of the basic rights and freedoms of individuals and groups. It covers issues such as freedom of expression, equality, and non-discrimination.'
    },
    {
      name: 'Immigration and Asylum Law',
      icon: <FaPassport color="white" size={50} />,
      description:
        'Immigration and asylum law involves the legal issues related to the entry and stay of individuals in a country. It covers issues such as visas, work permits, and refugee status.'
    },
    {
      name: 'Insurance Law',
      icon: <FaTrademark color="white" size={50} />,
      description:
        'Insurance law involves the legal issues related to insurance, such as coverage disputes, bad faith claims, and regulatory compliance. It involves advising clients on insurance policies and representing clients in court proceedings.'
    },
    {
      name: 'Intellectual Property Law',
      icon: <FaTrademark color="white" size={50} />,
      description:
        'Intellectual property law involves the legal issues related to the ownership and protection of intellectual property, such as patents, trademarks, and copyrights. It involves advising clients on intellectual property rights and representing clients in court proceedings.'
    },
    {
      name: 'Personal Injury and Clinical Negligence Law',
      icon: <FaHospital color="white" size={50} />,
      description:
        'Personal injury and clinical negligence law involves the legal issues related to harm caused to individuals by the actions of others, such as car accidents, medical malpractice, and workplace injuries. It involves representing clients in court proceedings and negotiating settlements.'
    },
    {
      name: 'Private Client Law',
      icon: <FaUserSecret color="white" size={50} />,
      description:
        'Private client law involves the legal issues related to the personal affairs of individuals and families, such as estate planning, wills, and trusts. It involves advising clients on their legal rights and obligations and representing clients in court proceedings.'
    },
    {
      name: 'Property Law',
      icon: <FaKey color="white" size={50} />,
      description:
        'Property law involves the legal issues related to the ownership and use of real estate, such as property transactions, land use regulations, and landlord-tenant disputes. It involves advising clients on their legal rights and representing clients in court proceedings.'
    },
    {
      name: 'Public Companies and Equity Finance Law',
      icon: <FaChartLine color="white" size={50} />,
      description:
        'Public companies and equity finance law involves the legal issues related to the formation, governance, and dissolution of publicly traded corporations. It covers issues such as securities law,'
    },
    {
      name: 'Public Companies and Equity Finance Law',
      icon: <FaChartLine color="white" size={50} />,
      description:
        'Public companies and equity finance law involves the legal issues related to the formation, governance, and dissolution of publicly traded corporations. It covers issues such as securities law, initial public offerings, and shareholder disputes.'
    },
    {
      name: 'Restructuring and Insolvency Law',
      icon: <FaHandHoldingUsd color="white" size={50} />,
      description:
        'Restructuring and insolvency law involves the legal issues related to financial distress and bankruptcy. It covers issues such as debt restructuring, creditor rights, and liquidation proceedings.'
    },
    {
      name: 'Shipping Law',
      icon: <FaShip color="white" size={50} />,
      description:
        'Shipping law involves the legal issues related to the transport of goods and people by sea, such as maritime accidents, cargo disputes, and ship finance. It involves advising clients on international trade and representing clients in court proceedings.'
    },
    {
      name: 'Social Welfare Law',
      icon: <FaHandsHelping color="white" size={50} />,
      description:
        'Social welfare law involves the legal issues related to social programs and benefits, such as disability benefits, unemployment compensation, and housing assistance. It involves representing clients in administrative hearings and court proceedings.'
    },
    {
      name: 'Tax Law',
      icon: <FaFileInvoice color="white" size={50} />,
      description:
        'Tax law involves the legal issues related to taxation, such as income tax, corporate tax, and sales tax. It involves advising clients on tax planning strategies and representing clients in tax disputes and audits.'
    }
  ]
  function getCategoryName(category) {
    handleClickedCategory(category)
  }
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-white/50">LEGAL PRACTICE AREAS</h3>
          </div>

          
          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => getCategoryName(category.name)}
                  className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover"
                >
                  {category.icon}
                  <h4 className="text-white text-2xl font-bold capitalize text-center h-20 pt-5">
                    {category.name}
                  </h4>
                  <p className="text-white/50 pt-10 text-center">
                    {category.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPick
