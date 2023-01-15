const Header = () => {

const languages =["en", "nl"];

return (
    <header id="header" className="mb-2">
        <div  className="container-fluid-nomax ocf-header">
			<div  className="container-fluid-custom">
				<div  className="container-fluid">
					<span  className="ocf-brand ocf-cutout"></span>
                    <div  className="ocf-header-right">
                        <div  data-dropdown="" data-dropdown-toggle="" className="btn-group hidden-xs hidden-xxs offset-sm-11">
                            <select  v-model="$i18n.locale" className="btn btn-link ocf-dropdown btn-smallest-width pull-right">
                                {languages.map(function (i) {
                                    return <option key={i} index={i}> {i.toUpperCase()} </option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
}

export default Header;