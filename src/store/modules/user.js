
import {deepClone} from '@/utils/util'

function getMenuApi() {
  return new Promise((reslove) => {
    let res = {
      code: 200,
      success: true,
      data: [
        {
          id: "1123598815738675201",
          parentId: "0",
          code: "desk",
          name: "工作台",
          alias: "menu",
          path: "/desk",
          source: "iconfont iconicon_airplay",
          sort: 1,
          category: 1,
          action: 0,
          isOpen: 1,
          remark: "",
          isDeleted: 0,
          children: [
            {
              id: "1123598815738675202",
              parentId: "1123598815738675201",
              code: "notice",
              name: "通知公告",
              alias: "menu",
              path: "/desk/notice",
              source: "iconfont iconicon_sms",
              sort: 1,
              category: 1,
              action: 0,
              isOpen: 1,
              remark: "",
              isDeleted: 0,
              hasChildren: false,
              parentName: "",
              categoryName: "",
              actionName: "",
              isOpenName: "",
            },
          ],
          hasChildren: false,
          parentName: "",
          categoryName: "",
          actionName: "",
          isOpenName: "",
        },
        {
          id: "1123598815738675280",
          parentId: "0",
          code: "work",
          name: "我的事务",
          alias: "menu",
          path: "/work",
          source: "iconfont iconicon_notice",
          sort: 2,
          category: 1,
          action: 0,
          isOpen: 1,
          remark: "",
          isDeleted: 0,
          children: [
            {
              id: "1123598815738675281",
              parentId: "1123598815738675280",
              code: "work_start",
              name: "发起事务",
              alias: "menu",
              path: "/work/start",
              source: "iconfont iconicon_compile",
              sort: 1,
              category: 1,
              action: 0,
              isOpen: 1,
              remark: "",
              isDeleted: 0,
              hasChildren: false,
              parentName: "",
              categoryName: "",
              actionName: "",
              isOpenName: "",
            },
          ],
          hasChildren: false,
          parentName: "",
          categoryName: "",
          actionName: "",
          isOpenName: "",
        },
      ],
    };
    reslove(res.data);
  });
}
const user = {
  state: {
    menu: [],
  },
  actions: {
    //获取系统菜单
    GetMenu({ commit }, parentId) {
      return new Promise((resolve) => {
        getMenuApi(parentId).then((res) => {
          const data = res;
          let menu = deepClone(data);
          commit("SET_MENU", menu);
          resolve(menu);
        });
      });
    },
  },
  mutations: {
    SET_MENU: (state, menu) => {
      state.menu = menu;
      // setStore({name: 'menu', content: state.menu, type: 'session'})
    },
  },
};

export default user;
