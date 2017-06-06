import { connect } from 'react-redux';
import { updateIncomeSources, updateIncome, updateSavings } from '../actions';
import Assumptions from './Assumptions';

const mapStateToProps = (state) => {
  return {
    assumptions: state.assumptions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateIncomeSources: (sources) => {
      dispatch(handleUpdateIncomeSources(Number(sources)))
    },

    handleUpdateIncome: (income) => {
      dispatch(updateIncome(
        Number((income).replace(',',''))
      ))
    },

    handleUpdateSavings: (savings) => {
      dispatch(updateSavings(
        Number((savings).replace(",", ""))
      ))
    }
  }
}

const AssumptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Assumptions)

export default AssumptionsContainer
