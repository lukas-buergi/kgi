/*
 * collectme frontend js
 */
jQuery( document ).ready( function() {
	collectme_user_management();
	collectme_package_show_desc();
	collectme_package_choose();
	collectme_package_upgrade();
     collectme_hide_n_show();
     collectme_last_entries();
     collectme_set_arctext();
     collectme_autocenter_text();
});

function collectme_user_management() {
	jQuery( '#collectme_select_user' ).change( function() {
		jQuery( '.collectme_user_privilegs' ).hide();
		jQuery( '#collectme_user_privilegs-' + jQuery( this ).val() ).show();
	} );
}

function collectme_package_show_desc() {
	jQuery( '.collectme-package-cell' )
		.mouseenter( function() {
			jQuery( this ).find( '.collectme-package-desc' ).slideDown( 200 );
		} )
		.mouseleave( function() {
			jQuery( this ).find( '.collectme-package-desc' ).slideUp( 200 );
		} );
}

function collectme_package_choose() {
	jQuery( '.collectme-package-cell' )
		.click( function() {
			jQuery( '.collectme_package_size' ).removeAttr( 'checked' );
			jQuery( this ).find( '.collectme_package_size' ).attr( 'checked', 'checked' );
			jQuery( '.collectme-package-cell' ).removeClass( 'collectme-package-choosen' );
			jQuery( this ).addClass( 'collectme-package-choosen' );
			jQuery( '#collectme_package_submit' ).show();
		} );
}

function collectme_package_upgrade() {
	jQuery( '#collectme_package_upgrade' )
		.click( function() {
			if ( confirm( jQuery( this ).attr( 'data-collectme-upgrade' ) ) ) {
				return true;
			} else {
				return false;
			}
		} );
}

function collectme_hide_n_show() {
     jQuery( 'div.collectme_hide_n_show' )
             .addClass( 'collectme_show_title_only' );
     jQuery( 'div.collectme_hide_n_show > h1' )
             .click( function() {
                  jQuery( this ).parent().toggleClass( 'collectme_show_title_only' );
             } );
}

function collectme_last_entries() {
     jQuery( '.collectme_filter_last_entries' ).not( '#collectme_last_entry_all' )
             .click( function() {
                  jQuery( '.collectme_last_entry' ).hide();
                  jQuery( '.' + jQuery( this ).attr( 'id' ) ).show();
             } );
     jQuery( '#collectme_last_entry_all' )
             .click( function() {
                  jQuery( '.collectme_last_entry' ).show();
             });
}

function collectme_set_arctext() {
     var $time = jQuery( '#collectme_time_pie_chart_label' ),
         $sign = jQuery( '#collectme_signatures_pie_chart_label' );
     $time.arctext({radius: 70, dir: -1});
     $sign.arctext({radius: 100, dir: -1});
}

function collectme_autocenter_text() {
     jQuery( '.collectme_autocenter' ).each( function() {
          jQuery( this ).css( 'left', 'calc( 50% - ' + ( parseInt( jQuery( this ).width() ) / 2 ) + 'px )' );
     });
}