import { connect } from 'react-redux'
import GamesView from './View'
import { getGamesSelector } from '../../reducers/Games'
import { getGames } from '../../actions/Games'

const mapStateToProps = (state: any) => getGamesSelector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getGames: () => dispatch(getGames()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesView)
