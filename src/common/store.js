import {observable} from 'mobx';

class Store {
		@observable UserInfo;
		@observable Comment;
		@observable Reply;
		@observable Cmt_Id;

		setUserInfo(userinfo){
			this.UserInfo = userinfo;
		}
		setComment(cmt){
				this.Comment = cmt;
		}
		setReply(rpl){
				this.Reply = rpl;
		}
		setCmtId(id){
			this.Cmt_Id = id;
		}
}

export default new Store();
