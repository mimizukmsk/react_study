import React from 'react'

// フォームコンポーネント
export class SimpleForm extends React.Component {
  // 初期化
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  // 値が変更されたとき
  doChange (e) {
    const newValue = e.target.value
    this.setState({
      value: newValue
    })
  }
  // 送信ボタンが押されたとき
  doSubmit (e) {
    window.alert('値を送信しました: ' + this.state.value)
    e.preventDefault()
  }
  // 画面の描画
  render () {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)

    return (
      <form onSubmit={doSubmit}>
        <input type='text' value={this.state.value} onChange={doChange} />
        <input type="submit" value='送信' />
      </form>
    )
  }
}