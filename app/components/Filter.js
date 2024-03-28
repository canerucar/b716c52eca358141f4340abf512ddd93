import styled from 'styled-components';
import { useState } from 'react';

const FilterMenu = styled.div`
  background-color: #212629;
  padding: 14px;
  max-width: 1200px;
  margin: 15px auto 0;
  display: flex;
  align-items: center;
`;

const FilterInput = styled.input`
  width: 134px;
  height: 32px;
  background-color: #34383b;
  border-radius: 2px;
  border: 0px;
  text-indent: 8px;
  font-weight: 500;
  font-size: 12px;
  padding-right: 30px;
  color: #FFFFFF;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
  }
`;

const SelectDate = styled.select`
  background-color: #34383b;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  margin-left: 10px;
  padding-left: 8px;
  width: 82px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const KingButton = styled.button`
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjUgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0xMy4xMTkgNC44OTJjMC45OTY2LTAuMzI5MzMgMS43MTU5LTEuMjY4NCAxLjcxNTktMi4zNzU1IDAtMS4zODE0LTEuMTE5OS0yLjUwMTMtMi41MDEzLTIuNTAxM3MtMi41MDEzIDEuMTE5OS0yLjUwMTMgMi41MDEzYzAgMS4wNzA2IDAuNjcyNTYgMS45ODQxIDEuNjE4MyAyLjM0MDktMi4zNjU3IDguNTMzMS02Ljc2MDQgNC42NDEzLTguMTcwNCAxLjM0NjIgMC42MTkwNS0wLjM3ODkzIDEuMDMyMS0xLjA2MTQgMS4wMzIxLTEuODQwNCAwLTEuMTkwOS0wLjk2NTM5LTIuMTU2My0yLjE1NjItMi4xNTYzLTEuMTkwOSAwLTIuMTU2MyAwLjk2NTM5LTIuMTU2MyAyLjE1NjMgMCAxLjEzMTQgMC44NzEzIDIuMDU5MiAxLjk3OTUgMi4xNDkxIDAuMDAxNDUgMC4wMTIwOCAwLjAwMzM1IDAuMDI0MTkgMC4wMDU3MSAwLjAzNjMxbDEuNzMxMSA4Ljg5MTZjMC4wNDU3MyAwLjIzNDkgMC4yNTE0OCAwLjQwNDQgMC40OTA3OSAwLjQwNDRoMTYuMjUzYzAuMjM5MyAwIDAuNDQ1MS0wLjE2OTUgMC40OTA4LTAuNDA0NGwxLjczMTEtOC44OTE2YzAuMDAxOS0wLjAwOTczIDAuMDAzNS0wLjAxOTQ2IDAuMDA0OC0wLjAyOTE3IDEuMTg5My0wLjAwMTg0IDIuMTUyOS0wLjk2NjUyIDIuMTUyOS0yLjE1NjIgMC0xLjE5MDktMC45NjU0LTIuMTU2My0yLjE1NjMtMi4xNTYzLTEuMTkwOCAwLTIuMTU2MiAwLjk2NTM5LTIuMTU2MiAyLjE1NjMgMCAwLjcxMTYzIDAuMzQ0NyAxLjM0MjcgMC44NzYzIDEuNzM1NC0wLjAxMDQgMC4wMTY0My0wLjAyIDAuMDMzNTMtMC4wMjg2IDAuMDUxMjUtMy41Nzg2IDcuMzY0Mi03LjE4NTggMi42NDY4LTguMjU2MS0xLjI1OHptLTguNTQ3OSAxMS45ODhjLTAuODA5NzkgMC0xLjQ2NjMgMC42NTY0LTEuNDY2MyAxLjQ2NjJzMC42NTY0NiAxLjQ2NjMgMS40NjYyIDEuNDY2M2gxNS41MjVjMC44MDk4IDAgMS40NjYzLTAuNjU2NSAxLjQ2NjMtMS40NjYzcy0wLjY1NjUtMS40NjYyLTEuNDY2My0xLjQ2NjJoLTE1LjUyNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=') no-repeat;
  width: 25px;
  height: 20px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

const SingleMatchButton = styled.button`
  background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='20' fill='%23fff' xmlns:v='https://vecta.io/nano'%3E%3Cpath d='M.84 1.886V0h7.939v1.886H6.032v6.735H3.588V1.886H.84zm8.873 6.735V0h6.583v1.886h-4.103v1.482h3.765v1.886h-3.764v1.482h4.086v1.886H9.713zm7.813 0V0h2.48v3.485h.125L22.878 0h2.89l-3.086 3.839 3.158 4.782h-2.962l-2.052-3.233-.821 1.01v2.223h-2.48zM.84 9.588h2.59l1.781 4.367h.09l1.781-4.367h2.59v7.71H7.636v-4.457h-.06L5.87 17.238H4.642l-1.706-4.427h-.06v4.487H.84v-7.71zm11.809 7.71h-2.245l2.53-7.71h2.844l2.53 7.71h-2.245l-1.676-5.586h-.06l-1.677 5.586zm-.419-3.042h4.221v1.566H12.23v-1.566zm13.61-1.777h-2.11a1.44 1.44 0 0 0-.12-.478 1.08 1.08 0 0 0-.262-.369 1.09 1.09 0 0 0-.401-.241c-.157-.058-.335-.087-.535-.087-.349 0-.645.085-.887.256s-.422.415-.546.734-.183.701-.183 1.148c0 .472.062.867.187 1.186a1.48 1.48 0 0 0 .55.715c.239.16.528.237.864.237a1.71 1.71 0 0 0 .516-.072 1.21 1.21 0 0 0 .397-.215 1.11 1.11 0 0 0 .273-.335 1.35 1.35 0 0 0 .146-.448l2.111.015a2.9 2.9 0 0 1-.273.998c-.157.339-.381.647-.67.934s-.642.512-1.066.685-.917.26-1.478.26c-.703 0-1.335-.152-1.893-.456a3.28 3.28 0 0 1-1.321-1.34c-.324-.59-.483-1.311-.483-2.165s.165-1.581.494-2.168.773-1.035 1.332-1.336 1.183-.455 1.871-.455a4.25 4.25 0 0 1 1.336.2 3.21 3.21 0 0 1 1.07.584 2.88 2.88 0 0 1 .741.937c.187.372.301.797.341 1.276zm-3.892 4.758h.733l-.06.346c.297.045.528.151.692.316s.248.371.251.617c.005.407-.193.727-.595.96s-.949.35-1.65.35v-.798c.369 0 .651-.04.846-.12s.297-.193.307-.346c.01-.14-.045-.257-.165-.35s-.297-.154-.539-.192l.18-.783z'/%3E%3C/svg%3E") no-repeat;
  width: 28px;
  height: 20px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`;

const DeleteButton = styled.button`
  background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='18' fill='none' xmlns:v='https://vecta.io/nano'%3E%3Cpath opacity='.01' fill='%23d8d8d8' d='M0 .429h15v17.143H0z'/%3E%3Cmask id='A' maskUnits='userSpaceOnUse' x='0' y='0' width='15' height='18'%3E%3Cpath fill='%23fff' d='M0 .429h15v17.143H0z'/%3E%3C/mask%3E%3Cg mask='url(%23A)'%3E%3Cpath fill-rule='evenodd' d='M13.594 3.643c.259 0 .469-.24.469-.536V2.036c0-.296-.21-.536-.469-.536h-3.516L9.803.874C9.696.628 9.414.429 9.173.429H5.822c-.239 0-.519.199-.624.445l-.275.626H1.406c-.259 0-.469.24-.469.536v1.071c0 .296.21.536.469.536h12.188zm-1.875 13.929c.776 0 1.406-.72 1.406-1.607V4.714H1.875v11.25c0 .887.63 1.607 1.406 1.607h8.438zm-1.406-2.143c-.259 0-.469-.24-.469-.536v-7.5c0-.296.21-.536.469-.536s.469.24.469.536v7.5c0 .296-.21.536-.469.536zm-2.812 0c-.259 0-.469-.24-.469-.536v-7.5c0-.296.21-.536.469-.536s.469.24.469.536v7.5c0 .296-.21.536-.469.536zm-2.812 0c-.259 0-.469-.24-.469-.536v-7.5c0-.296.21-.536.469-.536s.469.24.469.536v7.5c0 .296-.21.536-.469.536z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E") no-repeat;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  background-color: #212629;
  border-radius: 3px;
  background-position: center center;
`;

const Filter = ({ onFilterChange, onKingClick, onDeleteClick, onFilterMatches }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    onFilterChange(value);
  };

  return (
    <section>
      <FilterMenu>
        <FilterInput
          type="text"
          placeholder="Takım adı giriniz"
          value={filterValue}
          onChange={handleFilterChange}
        />
        <SelectDate id="dateSelector">
          <option value="0">Tarih</option>
          <option value="today">Bugün</option>
          <option value="tomorrow">Yarın</option>
        </SelectDate>
        <KingButton onClick={onKingClick}></KingButton>
        <SingleMatchButton onClick={onFilterMatches}></SingleMatchButton>
        <DeleteButton onClick={onDeleteClick}></DeleteButton>
      </FilterMenu>
    </section>
  );
};

export default Filter;