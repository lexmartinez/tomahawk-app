import About from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/About'
import { getAppInfo } from '../../actions/About'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getAppInfo: () => dispatch(getAppInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
