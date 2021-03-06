# Add more folders to ship with the application, here

# Additional import path used to resolve QML modules in Creator's code model
QML_IMPORT_PATH =

QT+= declarative network script
symbian:TARGET.UID3 = 0xE15D38CC

# Smart Installer package's UID
# This UID is from the protected range and therefore the package will
# fail to install if self-signed. By default qmake uses the unprotected
# range value if unprotected UID is defined for the application and
# 0x2002CCCF value if protected UID is given to the application
#symbian:DEPLOYMENT.installer_header = 0x2002CCCF

# Allow network access on Symbian
symbian:TARGET.CAPABILITY += NetworkServices

# If your application uses the Qt Mobility libraries, uncomment the following
# lines and add the respective components to the MOBILITY variable.
# CONFIG += mobility
# MOBILITY +=

# The .cpp file which was generated for your project. Feel free to hack it.
SOURCES += main.cpp \
    utmref.cpp \
    trafikantenAPI.cpp \
    favoriteslist.cpp


OTHER_FILES += \
    qml/MainPage.qml \
    qml/main.qml \
    Trafikanten.desktop \
    Trafikanten.svg \
    Trafikanten.png \
    qtc_packaging/debian_harmattan/rules \
    qtc_packaging/debian_harmattan/README \
    qtc_packaging/debian_harmattan/copyright \
    qtc_packaging/debian_harmattan/control \
    qtc_packaging/debian_harmattan/compat \
    qtc_packaging/debian_harmattan/changelog \
    qml/utilities.js \
    qml/TimetableView.qml \
    qml/StopSearchBox.qml \
    qml/SearchView.qml \
    qml/RecentsView.qml \
    qml/RecentsListView.qml \
    qml/NearbyView.qml \
    qml/NearbyListView.qml \
    qml/MainPage.qml \
    qml/main.qml \
    qml/FavoritesView.qml \
    qml/DeviModel.qml \
    qml/Background.qml \
    qml/ViewHeader.qml \
    qml/StopListDelegate.qml \
    qml/StopDataDelegate.qml \
    qml/StopSectionDelegate.qml \
    qml/StopDeviationDialog.qml \
    qml/AboutDialog.qml \
    qml/Separator.qml

RESOURCES += \
    res.qrc

TRANSLATIONS += \
    translations/trafikanten-nb.ts \
    translations/trafikanten-fr.ts \
    translations/trafikanten-es.ts

isEmpty(QMAKE_LRELEASE) {
    win32:QMAKE_LRELEASE = $$[QT_INSTALL_BINS]\lrelease.exe
    else:QMAKE_LRELEASE = $$[QT_INSTALL_BINS]/lrelease
}
updateqm.input = TRANSLATIONS
updateqm.output = ${QMAKE_FILE_PATH}/${QMAKE_FILE_BASE}.qm
updateqm.commands = $$QMAKE_LRELEASE ${QMAKE_FILE_IN} -qm ${QMAKE_FILE_PATH}/${QMAKE_FILE_BASE}.qm
updateqm.CONFIG += no_link target_predeps
QMAKE_EXTRA_COMPILERS += updateqm
PRE_TARGETDEPS += compiler_updateqm_make_all

# Please do not modify the following two lines. Required for deployment.
include(deployment.pri)
qtcAddDeployment()

INCLUDEPATH += /usr/include/applauncherd
LIBS += -lmdeclarativecache

# enable booster
CONFIG += qdeclarative-boostable
QMAKE_CXXFLAGS += -fPIC -fvisibility=hidden -fvisibility-inlines-hidden
QMAKE_LFLAGS += -pie -rdynamic

HEADERS += \
    utmref.h \
    trafikantenAPI.h \
    favoriteslist.h



